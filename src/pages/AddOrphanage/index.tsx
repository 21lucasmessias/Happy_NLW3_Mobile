import React, { useState } from 'react';

import Switch from '../../components/Switch';

import {
  Container,
  ScrollView,
  Form,
  Legend,
  FormBox,
  Label,
  TextInput,
  TextArea,
  FormImages,
  WeekendWrapper,
  TextWeekend,
  FormButton,
  TextButton,
} from './styles';

const AddOrphanage: React.FC = () => {
  const [weekend, SetWeekend] = useState(false);

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
            <Label>Sobre</Label>
            <TextArea />
          </FormBox>

          <FormBox>
            <Label>Número do WhatsApp</Label>
            <TextInput />
          </FormBox>

          <FormImages>
            <Label>Fotos</Label>
          </FormImages>

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

export default AddOrphanage;