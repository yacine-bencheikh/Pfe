import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faIdBadge, faDownload } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'react-native-qrcode-svg';
import { useReservationStore } from '../../store/store';
import * as FileSystem from 'expo-file-system';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';


const Res4 = () => {
    const reservation = useReservationStore(state => state.reservation);
    const [qrData, setQrData] = useState('');

    const svgRef = useRef(null);
    useEffect(() => {
        getDataURL();
    }, []);
    const getDataURL = () => {
        svgRef.current.toDataURL(callback);
    };
    
    const callback = (dataURL) => {
        setQrData(dataURL);
    };
    const print = async () => {
        try {
        await Print.printAsync({
            html: `
    <html>
    <head>
        <style>
            .frame {
                border: 1px solid black;
                padding: 10px;
                margin: 10px;
            }
            .qr-frame {
                border: 1px solid black;
                padding: 10px;
                margin: 10px;
                text-align: center;
            }
            .iccid-frame {
                border: 1px solid black;
                padding: 10px;
                margin: 10px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="frame">
            <h3>${reservation.puc1}</h3>
            <h3>${reservation.pin1}</h3>
        </div>
        <div class="qr-frame">
            <img src="data:image/jpeg;base64,${qrData}"/>
        </div>
        <div class="iccid-frame">
            <h3>${reservation.iccid}</h3>
        </div>
    </body>
    </html>
`,
        });
        } catch (error) {
        console.error('Error printing:', error);
        }
    };
    return (
        <View className="flex-1 bg-darkBg justify-center items-center">
            <View className="bg-modalColor items-center space-y-14 p-12 rounded-2xl">
                <View className="flex-row space-x-10 items-center">
                    <View className="flex-row space-x-1 items-center ">
                        <FontAwesomeIcon icon={faIdBadge} size={16} color='#b1b2b8' />
                        <Text className="font-bold text-sm text-textColor">Profile id</Text>
                    </View>
                    <Text>{reservation.iccid}</Text>
                </View>
                <View className='border-8 border-solid border-white rounded-3xl'>
                    <QRCode value="marhbee bik" size={200} getRef={svgRef}/>
                </View>
                <View>
                    <TouchableOpacity onPress={print} className="flex-row">
                        <FontAwesomeIcon icon={faDownload} size={16} color='#b1b2b8' />
                        <Text className="text-textColor" >Télecharger/Imprimé</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Res4;




// const generateHTMLFromObject = (obj) => {
//     // Only include the properties you're interested in
//     const properties = ['puc1', 'pin1', 'iccid'];
//     return properties.map(prop => `<p>${prop}: ${obj[prop]}</p>`).join('');
// };

// const generatePdf = async (obj) => {
//     try {
      
//         const html = `
//     <html>
//     <body>
//         ${generateHTMLFromObject(obj)}
//         <img src="${qrCodeImage}" />
//     </body>
//     </html>`;

//         const file = await printToFileAsync({
//             html: html,
//             base64: false,
//         });
//         await shareAsync(file.uri, { mimeType: 'application/pdf', dialogTitle: 'Share PDF' });
//     } catch (error) {
//         console.error('Error generating PDF:', error);
//         // Handle the error in a meaningful way, like showing an error message to the user
//     }
// };
