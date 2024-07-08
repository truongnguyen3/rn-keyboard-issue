import React from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  TextInput as TextInputRN,
  View,
} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';

const TextInput = (props: TextInputProps) => {
  return (
    <TextInputRN
      placeholderTextColor="#6c6c6c"
      style={styles.textInput}
      multiline
      numberOfLines={2}
      testID={props.placeholder}
      {...props}
      placeholder={`${props.placeholder} (${
        props.keyboardType === 'default' ? 'text' : 'numeric'
      })`}
    />
  );
};

function Header() {
  return (
    <View
      style={{
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCA47C',
      }}>
      <Text>Header</Text>
    </View>
  );
}

function Footer() {
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#698474',
      }}>
      <Text>Footer</Text>
    </View>
  );
}

function TableView() {
  return (
    <KeyboardAwareScrollView
      bottomOffset={0}
      style={styles.container}
      contentContainerStyle={styles.content}>
      {new Array(10).fill(0).map((_, i) => (
        <TextInput
          key={i}
          placeholder={`TextInput#${i}`}
          keyboardType={i % 2 === 0 ? 'numeric' : 'default'}
        />
      ))}
    </KeyboardAwareScrollView>
  );
}

function Main() {
  return (
    <View style={{
      flex: 1
      }}>
      <Header />
      <TableView />
      <Footer />
    </View>
  );
}

export default function AwareScrollView() {
  return (
    <KeyboardProvider>
      <Main />
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  content: {
    paddingTop: 50,
  },
  textInput: {
    width: '100%',
    minHeight: 50,
    maxHeight: 200,
    // marginBottom: 50,
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 160,
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 12,
  },
});
