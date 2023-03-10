import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";


export function NewGroup(){
  const [group, setGroup] = useState<string>('');
  const navigation = useNavigation();

  async function handleNewGroup(){
    try{
      if(group.trim().length === 0){
        return  Alert.alert('Nova turma', 'Informe o nome da turma');
      }
      await groupCreate(group);
      navigation.navigate('players', { group });
    }catch(error){
       if(error instanceof AppError){
          Alert.alert('Nova turma', error.message)
       }else{
          Alert.alert('Nova turma', 'Não foi possível criar uma nova turma');
       }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNewGroup} style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}