import React from 'react';
import { StyleSheet, FlatList,View, Text,Alert,SectionList } from 'react-native';

export default class CountryList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                12
                {/* <FlatList
                    data={channel.data}
                    renderItem = {({item,index})=><Text onPress={()=>Alert.alert(item.group_name)} style={styles.listElement}>{item} and {index}</Text>}
                />

                <SectionList 
                    sections={User}
                    renderItem={ ({item})=> <Text>{item}</Text> }
                    renderSectionHeader = {({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor = {(item, index)=>index}
                /> */}

            </View>
        );
    }

}

const styles = StyleSheet.create({
    listElement:{
        backgroundColor:'orange',
        fontSize:18
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
});