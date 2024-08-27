import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceRecognition = () => {
  const [recognized, setRecognized] = useState(false);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    setStarted(true);
  };

  const onSpeechRecognized = () => {
    setRecognized(true);
  };

  const onSpeechResults = (event) => {
    const text = event.value[0];
    setResult(text);
    if (text.toLowerCase().includes('hola')) {
      alert('¡Hola detectado!');
    }
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('es-ES');
      setRecognized(false);
      setResult('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Presiona el botón y di "hola"</Text>
      <Button title="Empezar a hablar" onPress={startRecognizing} />
      <Text style={styles.text}>Resultado: {result}</Text>
      <Text style={styles.text}>Reconocido: {recognized ? 'Sí' : 'No'}</Text>
      <Text style={styles.text}>Iniciado: {started ? 'Sí' : 'No'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default VoiceRecognition;
