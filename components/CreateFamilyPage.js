import React, { Component } from 'react';
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
import { createFamilyStyles as styles } from '../styles';

export default class CreateFamilyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSelected: 'Blue'

    };
  }
  render() {
    return (
      <Container>
      <Content
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.contentStyle}>
          <Form>
            <Button style={styles.buttonStyle} block>
              <Text>CREATE YOUR FAMILY</Text>
            </Button>
            <View style={styles.contentViewStyle}>
              <FormItem style={styles.formWidth}>
                <Input
                style={styles.inputStyle}
                placeholder='Enter the family name' />
              </FormItem>
            </View>
            <Button style={styles.buttonStyle} block>
              <Text style={{ color: '#fff' }}> ADD MEMBERS TO THE FAMILY</Text>
            </Button>
            <View style={styles.contentViewStyle}>
              <FormItem style={styles.formWidth}>
                <Input
                style={styles.inputStyle}
                placeholder='Enter e-mail here' />
              </FormItem>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Picker
                style={{
                  width: '70%',
                  alignSelf: 'center'
                }}
                selectedValue={this.state.valueSelected}
                onValueChange={(itemValue) => {
                  this.setState({ valueSelected: itemValue });
                }}
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
              <Button transparent bordered>
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
