import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import UploadImageIcon from '../../components/Icons/UploadImageIcon';
import NavbarLayout from '../../components/NavbarLayout';
import { NextPageWithLayout } from '../../types/global';
import { toastError } from '../../utils/toast';

const UpLoadAlbums: NextPageWithLayout = () => {
    const router = useRouter();
    const uploadBtnRef = useRef<HTMLInputElement>(null);

    const [albums, setAlbums] = useState<File[]>([]);
    console.log('albums: ', albums);

    const handleClick = () => {
        if (uploadBtnRef.current) {
            uploadBtnRef.current.click();
        }
    };

    const handleFileInput = (e: any) => {
        if (albums.length + e.target.files.length <= 10) {
            setAlbums((list) => [...list, ...e.target.files]);
        } else {
            toastError('Number of images must be less than 10');
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        for (let image of albums) {
            formData.append('albums', image);
        }
        //dispatch action
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
            <form className="grid grid-cols-3 my-8 gap-2.5">
                {albums &&
                    albums.map((image) => {
                        const url = URL.createObjectURL(image);

                        return (
                            <div key={image.lastModified} className="w-full overflow-hidden rounded-xl aspect-square">
                                <div className="image-container">
                                    <Image className="image" alt="post_image" layout="fill" src={url} />
                                </div>
                            </div>
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
                <button>Đăng ảnh</button>
            </form>
        </section>
    );
};

UpLoadAlbums.protected = true;
UpLoadAlbums.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;

export default UpLoadAlbums;
