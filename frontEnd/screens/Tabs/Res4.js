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
            <h3>Hello World</h3>
            <img src="data:image/jpeg;base64,${qrData}"/>
            `,
        });
        } catch (error) {
        console.error('Error printing:', error);
        }
    };
    return (
        <View className="flex-1 bg-blue-50 justify-center items-center">
            <View className="bg-red-300 items-center space-y-14 p-12 rounded-2xl">
                <View className="flex-row space-x-10 items-center">
                    <View className="flex-row space-x-1 items-center ">
                        <FontAwesomeIcon icon={faIdBadge} size={16} />
                        <Text className="font-bold text-sm">Profile id</Text>
                    </View>
                    <Text>{reservation.iccid}</Text>
                </View>
                <View>
                    <QRCode value="marhbee bik" size={200} getRef={svgRef}/>
                </View>
                <View>
                    <TouchableOpacity onPress={print} className="flex-row">
                        <FontAwesomeIcon icon={faDownload} />
                        <Text>Télecharger/Imprimé</Text>
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
