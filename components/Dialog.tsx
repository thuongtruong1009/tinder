import { Transition, Dialog as DialogContainer } from '@headlessui/react';
import { Fragment } from 'react';

interface Props {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Dialog({ title, isOpen, onClose, children }: Props) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <DialogContainer as="div" className="relative z-[1000]" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <Transition.Child
                    as={Fragment}
                    enter="transition-all duration-500"
                    enterFrom="top-full opacity-0"
                    enterTo="top-0 opacity-100"
                    leave="transition-all duration-200"
                    leaveFrom="top-0 opacity-100"
                    leaveTo="top-full opacity-0"
                >
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-full px-4 text-center">
                            <DialogContainer.Panel className="w-full max-w-[768px] px-4 py-12 space-y-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-t-[40px] min-h-[500px]">
                                <DialogContainer.Title as="p" className="button-2 text-neutral-100">
                                    {title}
                                </DialogContainer.Title>
                                {children}
                            </DialogContainer.Panel>
                        </div>
                    </div>
                </Transition.Child>
            </DialogContainer>
        </Transition>
    );
}
