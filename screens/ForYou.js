import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Dimensions,ScrollView,Image,TouchableOpacity,Linking } from 'react-native';
import { useEffect,useState } from 'react';

const {width,height}=Dimensions.get("window")

const CLIENT_ID='2dd8bdbefc744078bb83dbe56f8a2cec'
const CLIENT_SECRET='dc65eb1a4229474dbb32c2e7e24b663e'
  

export default function ForYou({navigation}) {

  const [searchInput,setSearchInput]=useState("")
  const [accesToken,setAccesToken]=useState("")
  const [albumArtist,setAlbumArtist]=useState([])

  useEffect(()=>{
    var authParameters={
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token',authParameters).then(response=>response.json()).then(data=>setAccesToken(data.access_token))

  },[])

  async function search(){
    console.log('Searching for '+searchInput)
    //Search artist ID
    var searchParameters={
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+accesToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?q='+searchInput+'&type=artist',searchParameters).then(response=>response.json()).then(data=>{return(data.artists.items[0].id)})
    console.log(searchInput+' ID is '+ artistID)
    //Search Albums for Artist
    var albums=await fetch(
      'https://api.spotify.com/v1/artists/'+artistID+'/albums?include_groups=album&market=US&limit=50',searchParameters
      ).then(response=>response.json()).then(data=> { setAlbumArtist(data.items)})
    
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput 
        placeholder='Search'
        defaultValue={searchInput}
        style={styles.txt}
        onChangeText={
          artist => setSearchInput(artist)
        }/>
        <Button 
        title='search' 
        onPress={
          ()=> search()
        }/>
        <ScrollView>
        {
          albumArtist.map((item,i)=>{
            return (
              <View key={i} style={styles.items}> 
                <TouchableOpacity onPress={()=>{Linking.openURL(item.uri)}}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Image 
                    source={{uri: item.images[0].url}}
                    style={{width: item.images[0].width, height:item.images[0].height}}
                  />
                  <Text>{item.release_date}</Text>
                </TouchableOpacity>

              </View>
            )
          })
        }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items:{
    height:'auto',
    width:'auto',
    marginBottom:15,
    justifyContent:'center',
    alignItems:'center',
    borderTopColor:'#000000',
    borderTopWidth:5,
  },
  title:{
    fontSize:20,
    textAlign:'center',
    margin:10,
    fontWeight:'bold',
  },
  txt:{
    fontSize:24,
    paddingHorizontal:10,
    paddingVertical:5,
    textAlign: 'center',
    width: width/1.5,
    borderColor:'#000',
    borderWidth:3,
    borderRadius:15,
},
img:{
    width: width/1.5,
    height: width/1.5,
}
});

