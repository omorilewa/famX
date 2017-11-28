/* eslint-disable no-console */
import React, { Component } from 'react';
import validator from 'validator';
import {
  View,
  Text,
  Picker,
} from 'react-native';
import {
  Container,
  Button,
  Input,
  Content,
  Form,
  Icon,
  Item as FormItem,
} from 'native-base';
import BlockButton from './BlockButton';
import { createFamilyStyles as styles } from '../styles';

export default class CreateFamilyPage extends Component {
  static navigationOptions = {
    title: 'Create family',
  };
  constructor(props) {
    super(props);
    this.state = {
      valueSelected: '',
      email: '',
      familyName: ''
    };
  }

  handleEmailChange = (newValue) => {
    this.setState({ email: newValue });
  }

  handleFamilyChange = (newValue) => {
    this.setState({ familyName: newValue });
  }

  handlePicker = (selectValue) => {
    this.setState({ valueSelected: selectValue });
  }

  handlePress = () => {
    const { email, familyName, valueSelected } = this.state;
    const emailSupplied = validator.isEmail(email);
    const familyNameSupplied = !validator.isEmpty(familyName);
    const rolePicked = !validator.equals('Select the role ...', valueSelected);
    if (emailSupplied && familyNameSupplied && rolePicked) {
      console.log(this.state.email, '===', this.state.familyName);
    } else {
      console.log('Have you chosen a family name, an email and selected a role?');
    }
  }

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.contentStyle}
        >
          <Form>
            <BlockButton
              buttonText="CREATE FAMILY"
            />
            <View style={styles.contentViewStyle}>
              <FormItem style={styles.formWidth}>
                <Input
                  onChangeText={this.handleFamilyChange}
                  placeholder='Enter the family name'
                  style={styles.inputStyle}
                  value={this.state.familyName}
                />
              </FormItem>
            </View>
            <BlockButton
              buttonText="ADD MEMBER TO FAMILY"
            />
            <View style={styles.contentViewStyle}>
              <FormItem style={styles.formWidth}>
                <Input
                  onChangeText={this.handleEmailChange}
                  placeholder='Enter e-mail here'
                  style={styles.inputStyle}
                  value={this.state.email}
                />
              </FormItem>
            </View>
            <View style={styles.viewStyle}>
              <Picker
                style={styles.pickerStyle}
                selectedValue={this.state.valueSelected}
                onValueChange={this.handlePicker}
                mode={'dropdown'}
                enabled
              >
                <Picker.Item label='Select the role ...' value='Role-select'/>
                <Picker.Item label='dad' value='dad'/>
                <Picker.Item label='mum' value='mum'/>
                <Picker.Item label='child' value='child'/>
              </Picker>
            </View>
            <FormItem
              style={styles.smallButtonStyle}
            >
              <Button
                transparent
                bordered
                onPress={this.handlePress}
              >
                <Text>Send Invite</Text>
                <Icon name='arrow-round-forward'/>
              </Button>
            </FormItem>
            <Button style={styles.buttonStyle} block>
              <Text>INVITE STATUS</Text>
            </Button>
         </Form>
        </Content>
      </Container>
    );
  }
}
