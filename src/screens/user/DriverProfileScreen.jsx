import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';

const DriverProfileScreen = ({ route }) => {
  const { driver } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${driver.phoneNumber}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <Image source={driver.image} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>{driver.name}</Text>
            <Text style={styles.rating}>Rating: {driver.rating} ★</Text>
            <TouchableOpacity onPress={handlePhonePress}>
              <Text style={styles.phoneNumber}>Phone: {driver.phoneNumber}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>{driver.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gallery</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagesContainer}>
          {driver.images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer Feedback</Text>
        {driver.feedback.map((feedback, index) => (
          <View key={index} style={styles.feedbackContainer}>
            <Text style={styles.feedbackText}>{feedback}</Text>
          </View>
        ))}
      </View>

      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Image source={selectedImage} style={styles.fullImage} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
  },
  profileContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  rating: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 15,
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  feedbackContainer: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  feedbackText: {
    fontSize: 16,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#333',
  },
  fullImage: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
});

export default DriverProfileScreen;
