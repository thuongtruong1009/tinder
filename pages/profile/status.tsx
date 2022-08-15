import React, { useState } from 'react';
import StatusRadioList from '../../components/Home/StatusRadioList';
import Title from '../../components/Home/Title';
import RadioCheckedIcon from '../../components/Icons/profile/RadioCheckedIcon';
import RadioUncheckIcon from '../../components/Icons/profile/RadioUncheckIcon';
import StatusChatIcon from '../../components/Icons/profile/StatusChatIcon';
import StatusCupIcon from '../../components/Icons/profile/StatusCupIcon';
import StatusFaceIcon from '../../components/Icons/profile/StatusFaceIcon';
import NavbarLayout from '../../components/NavbarLayout';
import { NextPageWithLayout } from '../../types/global';

const Status: NextPageWithLayout = () => {
    const [checked, setChecked] = useState<number>(1);

    return (
        <section className="container bg-white">
            <Title content={<h5 className="font-bold text-neutral-100">Cho mọi người biết lí do bạn ở đây?</h5>} />
            <div className="my-10 gap-4 flex flex-col">
                <StatusRadioList
                    title="Muốn hẹn hò"
                    icon={<StatusCupIcon />}
                    onClick={() => setChecked(1)}
                    radioIcon={checked === 1 ? <RadioCheckedIcon /> : <RadioUncheckIcon />}
                />
                <StatusRadioList
                    title="Muốn tâm sự"
                    icon={<StatusChatIcon />}
                    onClick={() => setChecked(2)}
                    radioIcon={checked === 2 ? <RadioCheckedIcon /> : <RadioUncheckIcon />}
                />
                <StatusRadioList
                    title="Đang tìm một mối quan hệ mới"
                    icon={<StatusFaceIcon />}
                    onClick={() => setChecked(3)}
                    radioIcon={checked === 3 ? <RadioCheckedIcon /> : <RadioUncheckIcon />}
                />
            </div>
        </section>
    );
};
Status.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>;
export default Status;
