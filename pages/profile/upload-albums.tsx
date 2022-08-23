import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import UploadImageIcon from '../../components/Icons/UploadImageIcon';
import NavbarLayout from '../../components/NavbarLayout';
import { NextPageWithLayout } from '../../types/global';
import { toastError } from '../../utils/toast';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userUploadAlbums } from '../../redux/actions/userActions';
import APP_PATH from '../../constant/appPath';
import AlbumsItem from '../../components/Profile/AlbumsItem';
import { selectUser } from '../../redux/reducers/userSlice';
import { VscLoading } from 'react-icons/vsc';

const UpLoadAlbums: NextPageWithLayout = () => {
    const router = useRouter();

    const dispatch = useAppDispatch();
    const sUser = useAppSelector(selectUser);

    const uploadBtnRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [albums, setAlbums] = useState<File[]>([]);
    console.log('albums: ', albums);

    const handleClick = () => {
        if (uploadBtnRef.current) {
            uploadBtnRef.current.click();
        }
    };

    const handleFileInput = (e: any) => {
        if (sUser.data) {
            const newAlbums: File[] = [];
            const maxLength = 10 - sUser.data.profile.albums.length - albums.length;
            const filesLength = e.target.files.length;

            if (maxLength > 0) {
                if (maxLength < filesLength) {
                    for (let index = 0; index < maxLength; index++) {
                        const image = e.target.files[index];
                        newAlbums.push(image);
                    }
                } else {
                    for (let index = 0; index < filesLength; index++) {
                        const image = e.target.files[index];
                        newAlbums.push(image);
                    }
                }
                setAlbums((list) => [...list, ...newAlbums]);
            }
        }
    };

    const handleRemove = (lastModified: number) => {
        setAlbums(albums.filter((item) => item.lastModified !== lastModified));
    };

    const handleSubmit = async () => {
        if (albums.length === 0) {
            toastError('Vui lòng chọn ảnh để tải lên');
            return;
        }

        setIsLoading(true);
        const formData = new FormData();

        for (let image of albums) {
            formData.append('albums', image);
        }
        //dispatch action
        try {
            await dispatch(userUploadAlbums(formData)).unwrap();
            router.push(APP_PATH.PROFILE);
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    return (
        <section className="container with-navbar">
            <Title
                className="mb-4"
                content={
                    <button className="p-2" onClick={() => router.back()}>
                        <ArrowLeft />
                    </button>
                }
            />
            {sUser.data && sUser.data.profile.albums.length < 10 ? (
                <p>Bạn có thể tải thêm {10 - sUser.data.profile.albums.length} ảnh. Tổng ảnh của albums là 10 ảnh.</p>
            ) : (
                <p>Albums của bạn đã đầy.</p>
            )}
            <div className="grid grid-cols-3 my-8 gap-2.5">
                {albums &&
                    albums.map((image) => {
                        const url = URL.createObjectURL(image);

                        return (
                            <AlbumsItem
                                key={image.lastModified}
                                url={url}
                                upLoad
                                onClick={() => handleRemove(image.lastModified)}
                            />
                        );
                    })}

                <div
                    onClick={handleClick}
                    className="flex-col w-full overflow-hidden border-2 border-dashed cursor-pointer text-neutral-100 border-sky-400 rounded-xl aspect-square flex-center gap-y-1"
                >
                    <UploadImageIcon />
                    <span>Tải ảnh lên</span>
                    <input
                        type="file"
                        name="albums"
                        id="albums"
                        multiple
                        hidden
                        accept="image/png, image/jpg, image/jpeg"
                        ref={uploadBtnRef}
                        onChange={handleFileInput}
                    />
                </div>
            </div>
            {!isLoading && (
                <Button
                    onClick={handleSubmit}
                    block
                    disabled={sUser.data && sUser.data.profile.albums.length === 10 ? true : false}
                    title="Lưu"
                    type="secondary"
                    className="mt-auto"
                />
            )}
            {isLoading && (
                <button className="bg-neutral-100 btn-md text-white w-full flex-center">
                    <VscLoading className="animate-spin" />
                </button>
            )}
        </section>
    );
};

UpLoadAlbums.protected = true;
UpLoadAlbums.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;

export default UpLoadAlbums;
