
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Transactions extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            buttonState:'normal',
            scannedData:''
        }
    }

     getCameraPermission= async ()=>{
const{status}=await Permissions.askAsync(Permissions.CAMERA)
this.setState({hasCameraPermissions:status==='granted'})
    }

    handleBarcodeScan=async({type, data})=>{
this.setState({
    scanned:true,
    scannedData:data,
    buttonState:"normal"
})
    }
    render(){
        const hasCamPermission=this.state.hasCameraPermissions;
const scanned=this.state.scanned
const buttonState= this.state.buttonState
if(buttonState==='clicked'&& hasCamPermission){
    return(
        <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handleBarcodeScan}/>
    )
}
else if(buttonState==='normal')
{        return(
            <View style={styles.container}>
                
                <Text style={styles.displayText}>
                   {hasCamPermission===true? this.state.scannedData:'request Camera Permission'}
                </Text>

                <TouchableOpacity style={styles.scanButton} onPress={this.getCameraPermission}>
                    <Text style={styles.buttonText}>scan QR code</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });

