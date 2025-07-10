import { View, Text, StyleSheet, ImageBackground, ScrollView, Button, TouchableOpacity} from 'react-native'
import React from 'react'



import studentImg from "@/assets/images/student.png.png"



const sms = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <ImageBackground source={studentImg} resizeMode="cover" style={styles.image}>
      <Text style={styles.heading}>Welcome to {'\n'}School Managment {'\n'}System</Text>
      
      <Text style={styles.description}>
        Streamline school management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly.
      </Text>

       <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <Button title="Login" onPress={() => navigation.navigate('dashboard')} />
            
       </View>

       <TouchableOpacity style={styles.guestButton} onPress={() => navigation.navigate('Login')}>
         <Text style={styles.guestButtonText}>LOGIN AS GUEST</Text>
          </TouchableOpacity>
         <View style={styles.container}>
      <Text style={styles.text}>
        Don't have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Signup')} // Make sure "Signup" is defined in your navigator
        >
          Sign up
                   </Text>
                 </Text>
              </View>  
        </ImageBackground>
     </View>
   </ScrollView>
  );
}

export default sms

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection: 'column',

  },
  image: {
    width: '100%',
    height: '50%',
    flex: 1,
    resizeMode: 'middle',
    justifyContent: 'center',
   

  },
  heading: {
    marginTop: 490,
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left-alignment',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    
     
    

  },
  description: {
    
    color: 'black',
    fontSize: 18,
    marginTop: 40,
    textAlign: 'left',
    paddingHorizontal: 20,
      
  },
  guestButton: {
    width: 190, 
    height: 40, 
    borderWidth: 0.5,
    borderColor: '#007BFF',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    paddingHorizontal: 20,
    marginLeft: 4,
    alignSelf: 'center',
      
    
  },
  guestButtonText: {
    color: '#007BFF',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginLeft: 4,
    marginTop: 40,
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
})