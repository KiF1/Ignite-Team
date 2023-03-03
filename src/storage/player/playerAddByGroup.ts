import { PlayerStorageDTO } from "./PlayerStorageDTO";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from "@storage/storageConfig";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
  try{
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, '');
  }catch(error){

  }
}