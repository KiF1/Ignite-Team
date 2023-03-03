import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { GroupCard } from '../../components/GroupCard/index';
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupGetAll";


export  function Groups() {
  const [groups, setGroups] = useState<string[]>(['galera']);
  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  async function fetchGroups(){
    try{
      const data = await groupsGetAll();
      setGroups(data);
    }catch(error){
      throw error;
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group});
  }
  
  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []))

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com as sua turma" />
      <FlatList data={groups} keyExtractor={item => item} renderItem={({item}) => (
        <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
      )} contentContainerStyle={groups.length === 0 && {flex: 1}} ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />} />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
