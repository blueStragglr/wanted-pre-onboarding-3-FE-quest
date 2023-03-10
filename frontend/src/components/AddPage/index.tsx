import { useState } from 'react';
import { Button, ErrMsg, Form, Input } from './style';

const AddPage = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}} = e
    setValue(value)
  }
  const handlePages = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
    <Form action="" onSubmit={handlePages}>
        <Input 
        type='text' 
        placeholder='추가 페이지를 입력해주세요'
        onChange={handleValue}
        />
        <Button onClick={handlePages}>add page</Button>
    </Form> 
    {error 
    &&<ErrMsg>
        {error}
      </ErrMsg>}
    </>
  )
}

export default AddPage