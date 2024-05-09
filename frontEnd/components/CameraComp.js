import { StyleSheet, Text, View, Image,Dimensions} from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { useApiStore } from '../store/store';
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';


const CameraComp = ({array,setArray}) => {
    const addItem = useApiStore((state) => state.addItem);
    const documentsPath = useApiStore((state) => state.documentsPath);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.front);
    const cameraRef = useRef(null);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    const addPhoto = (photo) => {
        setArray([...array, photo]);
    };

    const handleFacesDetected = ({ faces }) => {
        if (faces.length > 0) {

            faces.forEach((face) => {
                let leftCheekPosition = face.LEFT_CHEEK.x;
                let rightCheekPosition = face.RIGHT_CHEEK.x;
                if (array.length === 0) {
                    takePicture("frontal")
                } else if (rightCheekPosition > /*40*/ 35 && rightCheekPosition < /*55*/ 60 && leftCheekPosition > /*90*/ 85 && leftCheekPosition < /*105*/ 110 && array.length === 1) {
                    takePicture("right")
                } else if (leftCheekPosition > 135 && leftCheekPosition < 145 && rightCheekPosition > 93 && rightCheekPosition < 98 && array.length === 2) {
                    takePicture("left")
                }


            })
        }
    };


    const takePicture = async (position) => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            const photoWithPosition = { ...photo, position: position };
            addPhoto(photoWithPosition)
            if(array.length === 2){
                console.log("d5al w setta el array")
                addItem(array)
                console.log();
            }
        }
    };

    return (
        <View style={styles.cameraContainer} className='bg-slate-500'>
            <Camera
                style={styles.camera}
                type={type}
                onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                    mode: FaceDetector.FaceDetectorMode.accurate,
                    detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                    runClassifications: FaceDetector.FaceDetectorClassifications.all,
                    minDetectionInterval: 100,
                    tracking: true,
                }}
                ref={cameraRef}
            />
            

        </View>
    )
}

export default CameraComp

const styles = StyleSheet.create({
    cameraContainer: {
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').width/2,
        borderRadius: (Dimensions.get('window').width * 0.5) / 2,
        overflow: 'hidden',
    },
    camera: {
        flex: 1,
    },
    overlayImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
});