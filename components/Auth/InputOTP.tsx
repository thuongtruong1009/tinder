import { useEffect, useRef } from 'react';

interface Props {}

export default function InputOTP(props: Props) {
    const firstRef = useRef<HTMLInputElement>(null);
    const secondRef = useRef<HTMLInputElement>(null);
    const thirdRef = useRef<HTMLInputElement>(null);
    const fourthRef = useRef<HTMLInputElement>(null);
    const fifthRef = useRef<HTMLInputElement>(null);
    const sixthRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (
            firstRef.current &&
            secondRef.current &&
            thirdRef.current &&
            fourthRef.current &&
            fifthRef.current &&
            sixthRef.current
        ) {
            const refs = [
                firstRef.current,
                secondRef.current,
                thirdRef.current,
                fourthRef.current,
                fifthRef.current,
                sixthRef.current,
            ];
            for (let i = 0; i < refs.length; i++) {
                refs[i].addEventListener('mouseenter', function (event) {
                    if (refs[0].value === '') {
                        refs[0].focus();
                    } else if (refs[1].value === '') {
                        refs[1].focus();
                    } else if (refs[2].value === '') {
                        refs[2].focus();
                    } else if (refs[3].value === '') {
                        refs[3].focus();
                    } else if (refs[4].value === '') {
                        refs[4].focus();
                    } else if (refs[5].value === '') {
                        refs[5].focus();
                    }
                });

                refs[i].addEventListener('keydown', function (event) {
                    if (event.key === 'Backspace') {
                        refs[i].value = '';
                        if (i !== 0) refs[i - 1].focus();
                    } else {
                        if (i === refs.length - 1 && refs[i].value !== '') {
                            return true;
                        } else if (event.keyCode > 47 && event.keyCode < 58) {
                            if (/^[0-9]*$/.test(event.key)) {
                                refs[i].value = event.key;
                                if (i !== refs.length - 1) refs[i + 1].focus();
                            }
                            event.preventDefault();
                        } else if (event.keyCode > 64 && event.keyCode < 91) {
                            if (/^[0-9]*$/.test(event.key)) {
                                refs[i].value = event.key;
                                if (i !== refs.length - 1) refs[i + 1].focus();
                            }
                            event.preventDefault();
                        }
                    }
                });
            }
        }
    }, [firstRef, secondRef, thirdRef, fourthRef, fifthRef, sixthRef]);

    return (
        <div className="inputOTP">
            <div className="inputOTP-item">
                <input type="text" id="first" maxLength={1} placeholder=" " ref={firstRef} />
                <span></span>
            </div>
            <div className="inputOTP-item">
                <input type="text" id="second" maxLength={1} placeholder=" " ref={secondRef} />
                <span></span>
            </div>
            <div className="inputOTP-item">
                <input type="text" id="third" maxLength={1} placeholder=" " ref={thirdRef} />
                <span></span>
            </div>
            <div className="inputOTP-item">
                <input type="text" id="fourth" maxLength={1} placeholder=" " ref={fourthRef} />
                <span></span>
            </div>
            <div className="inputOTP-item">
                <input type="text" id="fifth" maxLength={1} placeholder=" " ref={fifthRef} />
                <span></span>
            </div>
            <div className="inputOTP-item">
                <input type="text" id="sixth" maxLength={1} placeholder=" " ref={sixthRef} />
                <span></span>
            </div>
        </div>
    );
}
