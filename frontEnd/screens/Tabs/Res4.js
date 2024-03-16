import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import QRCode from "react-native-qrcode-svg";
import React from 'react'
import { useReservationStore } from '../../store/store';
import * as FileSystem from 'expo-file-system';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing'

const generateHTMLFromObject = (obj) => {
    // Only include the properties you're interested in
    const properties = ['puc1', 'pin1', 'iccid'];
    return properties.map(prop => `<p>${prop}: ${obj[prop]}</p>`).join('');
};
let generatePdf = async (obj)=>{
    const html = `<html>
    <body>
    ${generateHTMLFromObject(obj)}
    </body>
    </html>`

    const file = await printToFileAsync({
        html: html,
        base64: false
    });
    await shareAsync(file.uri, {mimeType: 'application/pdf', dialogTitle: 'Share PDF'})
}

// const generateQRCode = async (text) => {
//     // Generate a QR code and return its base64 representation
//     const qr = await new QRCode().toDataURL(text);
//     return `<img src="${qr}" />`;
// };

const Res4 = () => {
    const reservation = useReservationStore(state => state.reservation);

    const handleDownloadPDF = async () => {
        try {
            // Convert object data to HTML
            const htmlContent = generateHTMLFromObject(reservation);
            // Generate QR code
            const qrCode = await generateQRCode(reservation.codeActivation);
            // Generate PDF
            const pdf = await Print.printToFileAsync({
                html: htmlContent + qrCode,
                base64: false,
            });
            const newFileUri = FileSystem.documentDirectory + 'data.pdf';
            await FileSystem.moveAsync({
                from: pdf.uri,
                to: newFileUri,
            });
            console.log('PDF generated:', newFileUri);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <View className='flex-1 bg-blue-50 justify-center items-center'>
            <View className=' bg-red-300 items-center space-y-14 p-12 rounded-2xl'>
                <View className='flex-row space-x-10 items-center'>
                    <View className='flex-row space-x-1 items-center '>
                        <FontAwesomeIcon icon={faIdBadge}
                            size={16}
                        />
                        <Text className='font-bold text-sm'>Profile id</Text>
                    </View>
                    <Text>{reservation.iccid}</Text>
                </View>
                <View>
                    <QRCode value='marhbee bik' size={200} />
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{generatePdf(reservation)}} className='flex-row'>
                        <FontAwesomeIcon icon={faDownload} />
                        <Text>Télecharger/Imprimé</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Res4