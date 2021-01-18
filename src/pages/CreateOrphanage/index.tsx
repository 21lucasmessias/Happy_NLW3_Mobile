import { useRoute } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { LatLng } from 'react-native-maps';

import { Form } from '@unform/mobile';

import FormImages from '../../components/FormImages';
import Switch from '../../components/Switch';
import Input from '../../components/Input';

import {
  Container,
  ScrollView,
  FormContainer,
  Legend,
  FormBox,
  Label,
  TextBox,
  InfoText,
  WeekendWrapper,
  TextWeekend,
  FormButton,
  TextButton,
} from './styles';

const CreateOrphanage: React.FC = () => {
  const [weekend, SetWeekend] = useState(false);
  const [images, setImages] = useState<Array<string>>([]);

  const [isEmpty, setIsEmpty] = useState(true);

  const route = useRoute();
  const orphanageLocation = (route.params as LatLng);

  return (
    <Container>
      <ScrollView>
        <FormContainer>
          <Form onSubmit={() => { }}>
            <Legend>
              Dados
            </Legend>

            <FormBox>
              <Label>Nome</Label>
              <Input name='Name' />
            </FormBox>

            <FormBox>
              <TextBox>
                <Label>Sobre</Label>
                <InfoText>Máximo de 300 catacteres</InfoText>
              </TextBox>
              <Input name='About' textArea multiline maxLength={300} />
            </FormBox>

            <FormBox>
              <Label>Número do WhatsApp</Label>
              <Input name='WhatsApp' />
            </FormBox>

            <FormImages images={images} setImages={setImages} />

            <Legend>
              Visitação
            </Legend>

            <FormBox>
              <Label>Instruções</Label>
              <Input name='Instructions' textArea multiline maxLength={300} />
            </FormBox>

            <FormBox>
              <Label>Horário de Visitas</Label>
              <Input name='Schedule' />
            </FormBox>

            <WeekendWrapper>
              <TextWeekend>Atende fim de semana?</TextWeekend>
              <Switch state={weekend} setState={SetWeekend} />
            </WeekendWrapper>

            <FormButton>
              <TextButton>Próximo</TextButton>
            </FormButton>
          </Form>
        </FormContainer>
      </ScrollView>
    </Container>
  )
}

export default CreateOrphanage;