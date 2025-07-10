import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
      <ScrollView contentContainerStyle={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Admin')}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        {({ pressed }) => (
          <>
            <Text style={[styles.icon, pressed && styles.iconPressed]}>
              👤
            </Text>
            <Text style={[styles.title, pressed && styles.textPressed]}>
              Admin
            </Text>
            <Text style={[styles.desc, pressed && styles.textPressed]}>
              Login as an administrator to {'\n'}
              access the dashboard to {'\n'}
              manage app data.
            </Text>
          </>
        )}
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Student')}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        {({ pressed }) => (
          <>
            <Text style={[styles.icon, pressed && styles.iconPressed]}>
              🎓
            </Text>
            <Text style={[styles.title, pressed && styles.textPressed]}>
              Student
            </Text>
            <Text style={[styles.desc, pressed && styles.textPressed]}>
              Login as a student to explore course materials and {'\n'}
              assignments.
            </Text>
          </>
        )}
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Teacher')}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        {({ pressed }) => (
          <>
            <Text style={[styles.icon, pressed && styles.iconPressed]}>
              👥
            </Text>
            <Text style={[styles.title, pressed && styles.textPressed]}>
              Teacher
            </Text>
            <Text style={[styles.desc, pressed && styles.textPressed]}>
              Login as a teacher to create courses, assignments, and {'\n'}
              track student progress.
            </Text>
          </>
        )}
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scroll: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  container: {
    backgroundColor: '#000080',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    
    
  },
  card: {
    backgroundColor: '#fff',
    width: '80%',              
    aspectRatio: 1,            
    margin: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,    
    height: 210,
    
  },
  cardPressed: {
  backgroundColor: '#301b66',    
  },
  icon: {
    fontSize: 25,
    marginBottom: 9,
    color: '#000',
  },
  iconPressed: {
    color: '#fff',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20, 
  },
  desc: {
    marginBottom: 20 ,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    
  },
  textPressed: {
    color: '#fff',
  },

});

