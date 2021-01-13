import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { LatLng } from 'react-native-maps';

import FormImages from '../../components/FormImages';
import Switch from '../../components/Switch';

import {
  Container,
  ScrollView,
  Form,
  Legend,
  FormBox,
  Label,
  TextBox,
  InfoText,
  TextInput,
  TextArea,
  WeekendWrapper,
  TextWeekend,
  FormButton,
  TextButton,
} from './styles';



const CreateOrphanage: React.FC = () => {
  const [weekend, SetWeekend] = useState(false);
  const [images, setImages] = useState<Array<string>>([]);

  const route = useRoute();
  const orphanageLocation = (route.params as LatLng);

  return (
    <Container>
      <ScrollView>
        <Form>
          <Legend>
            Dados
          </Legend>

          <FormBox>
            <Label>Nome</Label>
            <TextInput />
          </FormBox>

          <FormBox>
            <TextBox>
              <Label>Sobre</Label>
              <InfoText>Máximo de 300 catacteres</InfoText>
            </TextBox>
            <TextArea />
          </FormBox>

          <FormBox>
            <Label>Número do WhatsApp</Label>
            <TextInput />
          </FormBox>

          <FormImages images={images} setImages={setImages} />

          <Legend>
            Visitação
          </Legend>

          <FormBox>
            <Label>Instruções</Label>
            <TextArea />
          </FormBox>

          <FormBox>
            <Label>Horário de Visitas</Label>
            <TextInput />
          </FormBox>

          <WeekendWrapper>
            <TextWeekend>Atende fim de semana?</TextWeekend>
            <Switch state={weekend} setState={SetWeekend} />
          </WeekendWrapper>

          <FormButton>
            <TextButton>Próximo</TextButton>
          </FormButton>
        </Form>
      </ScrollView>
    </Container>
  )
}

export default CreateOrphanage;