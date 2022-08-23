import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Title from '../../components/Home/Title';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import NavbarLayout from '../../components/NavbarLayout';
import AlbumsImage from '../../components/Profile/AlbumsImage';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userDeleteImage, userUpdateDefault, userUpdateFavorite } from '../../redux/actions/userActions';
import { selectUser } from '../../redux/reducers/userSlice';
import { NextPageWithLayout } from '../../types/global';
import { toastError } from '../../utils/toast';

const Albums: NextPageWithLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [numFavorite, setNumFavorite] = useState(0);
    const [numDefault, setNumDefault] = useState(0);

    const sUser = useAppSelector(selectUser);

    const handleFavorite = (url: string) => async () => {
        try {
            await dispatch(userUpdateFavorite(url)).unwrap();
            setNumFavorite(numFavorite - 1);
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const handleDefault = (url: string) => async () => {
        try {
            await dispatch(userUpdateDefault(url)).unwrap();
            setNumDefault(numDefault - 1);
        } catch (error) {
            toastError((error as IResponseError).error);
        }
    };

    const handleDelete = (url: string) => async () => {
        try {
            await dispatch(userDeleteImage(url)).unwrap();
        } catch (error) {
            console.log(error);
            toastError((error as IResponseError).error);
        }
    };

    useEffect(() => {
        if (sUser.data) {
            let favorites = 0;
            let defaults = 0;
            sUser.data.profile.albums.forEach((image) => {
                if (image.isFavorite) {
                    favorites += 1;
                }
                if (image.isDefault) {
                    defaults += 1;
                }
            });

            setNumFavorite(favorites);
            setNumDefault(defaults);
        }
    }, [sUser, numFavorite, numDefault]);

    return (
        <section className="container pb-24 bg-white with-layout">
            <Title
                className="mb-4"
                content={
                    <button className="p-2" onClick={() => router.back()}>
                        <ArrowLeft />
                    </button>
                }
            />

            <div className="grid grid-cols-2 gap-2.5">
                {sUser.data &&
                    sUser.data.profile.albums.map((item) => (
                        <AlbumsImage
                            key={item.url}
                            url={item.url}
                            isFavorite={item.isFavorite}
                            isDefault={item.isDefault}
                            isDefaultFull={numDefault < 1 ? false : true}
                            isFavoriteFull={numFavorite < 3 ? false : true}
                            onDefault={handleDefault(item.url)}
                            onDelete={handleDelete(item.url)}
                            onFavorite={handleFavorite(item.url)}
                        />
                    ))}
            </div>
        </section>
    );
};
Albums.protected = true;
Albums.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;

export default Albums;
