/* eslint-disable no-console */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';
import { Container, Content } from 'native-base';
import BlockButton from './BlockButton';
import DropDown from './DropDown';
import IconButton from './IconButton';
import InputField from './InputField';
import { createFamilyStyles as styles } from '../styles';
import { validateFamilyFields } from '../utils';

class CreateFamilyForm extends Component {
  static navigationOptions = {
    title: 'Create family',
  };

  static propTypes = {
    handleSubmit: PropTypes.func
  }

  handlePress = (values) => {
    console.log('stringified', values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Content
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.contentStyle}
        >
          <Field
            buttonText="CREATE FAMILY"
            component={BlockButton}
            name="createFamily"
          />
          <Field
            component={InputField}
            name="enterFamily"
            placeholder='Enter the family name'
            style={styles.inputStyle}
          />
          <Field
            buttonText="ADD MEMBER TO FAMILY"
            component={BlockButton}
            name="addmember"
          />
          <Field
            component={InputField}
            name="email"
            placeholder='Enter e-mail here'
            style={styles.inputStyle}
          />
          <Field
            bordered
            buttonText="Send Invite"
            component={IconButton}
            iconName='arrow-round-forward'
            name="sendInvite"
            onPress={handleSubmit(this.handlePress)}
            smallButton
            transparent
          />
          <Field
            component={DropDown}
            name="picker"
          >
            <Picker.Item label='Select Role ...' value='Role-select' />
            <Picker.Item label='dad' value='dad' />
            <Picker.Item label='mum' value='mum' />
            <Picker.Item label='child' value='child' />
          </Field>
          <Field
            buttonText="INVITE STATUS"
            component={BlockButton}
            name="inviteStatus"
          />
        </Content>
      </Container>
    );
  }
}

const CreateFamilyPage = reduxForm({
  form: 'create-family',
  validateFamilyFields,
})(CreateFamilyForm);

export default CreateFamilyPage;
