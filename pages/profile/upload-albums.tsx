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

    const [remainingImages, setRemainingImages] = useState<number>(
        sUser.data ? +(process.env.MAX_IMAGES_ALBUMS as string) - sUser.data.profile.albums.length : 0,
    );

    const [isLoading, setIsLoading] = useState(false);
    const [albums, setAlbums] = useState<File[]>([]);
    console.log('albums: ', albums);

    const handleClick = () => {
        if (uploadBtnRef.current) {
            uploadBtnRef.current.click();
        }
    };

    const handleFileInput = (e: any) => {
        const newAlbums: File[] = [];
        const filesLength = e.target.files.length;

        if (remainingImages < filesLength) {
            for (let index = 0; index < remainingImages; index++) {
                const file: File = e.target.files[index];
                if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
                    toastError(file.name + ' không phải kiểu ảnh được phép tải lên.');
                } else {
                    newAlbums.push(file);
                }
            }

            setRemainingImages(0);
        } else {
            for (let index = 0; index < filesLength; index++) {
                const file: File = e.target.files[index];
                if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg') {
                    toastError(file.name + ' không phải kiểu ảnh được phép tải lên.');
                } else {
                    newAlbums.push(file);
                }
            }

            setRemainingImages(remainingImages - filesLength);
        }
        setAlbums((list) => [...list, ...newAlbums]);
    };

    const handleRemove = (indexImage: number) => {
        setAlbums(albums.filter((item, index) => index !== indexImage));
        setRemainingImages(remainingImages + 1);
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
            console.log(error);
            toastError((error as IResponseError).error);
        }
    };

    return (
        <section className="container bg-white with-navbar">
            <Title
                className="mb-4"
                content={
                    <button className="p-2" onClick={() => router.back()}>
                        <ArrowLeft />
                    </button>
                }
            />
            {remainingImages > 0 ? <p>Bạn có thể tải thêm {remainingImages} ảnh</p> : <p>Albums của bạn đã đầy</p>}
            <div className="grid grid-cols-3 my-8 gap-2.5">
                {albums &&
                    albums.map((image, index) => {
                        const url = URL.createObjectURL(image);

                        return (
                            <AlbumsItem
                                key={image.lastModified + index}
                                url={url}
                                upLoad
                                onClick={() => handleRemove(index)}
                            />
                        );
                    })}

                {remainingImages > 0 && (
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
                )}
            </div>
            {!isLoading &&
                sUser.data &&
                sUser.data.profile.albums.length < +(process.env.MAX_IMAGES_ALBUMS as string) && (
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
                <button className="w-full text-white bg-neutral-100 btn-md flex-center">
                    <VscLoading className="animate-spin" />
                </button>
            )}
        </section>
    );
};

UpLoadAlbums.protected = true;
UpLoadAlbums.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;

export default UpLoadAlbums;
