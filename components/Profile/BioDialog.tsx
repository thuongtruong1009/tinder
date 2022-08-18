import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import Dialog from '../Dialog';
import ChatOptionIcon from '../Icons/ChatOptionIcon';
import CupIcon from '../Icons/CupIcon';
import KissFaceIcon from '../Icons/KissFaceIcon';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function BioDialog({ isOpen, onClose }: Props) {
    const [value, setValue] = useState('');
    const handleClose = () => {
        onClose();
    };
    return (
        <>
            <Dialog title="Giới thiệu bản thân" isOpen={isOpen} onClose={handleClose}>
                <textarea
                    className="px-2 py-[10px] rounded-lg bg-neutral-5 w-full resize-none"
                    rows={4}
                    placeholder="Ví dụ: Quan trọng là important"
                    maxLength={200}
                ></textarea>
            </Dialog>
        </>
    );
}
