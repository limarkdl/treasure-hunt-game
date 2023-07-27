import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const qrREADER = (props: any) => {
    const [data, setData] = useState('No result');

    return (
        <>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result.getText());
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}

             constraints={{ facingMode: 'user' }}/>
            <p>{data}</p>
        </>
    );
};
