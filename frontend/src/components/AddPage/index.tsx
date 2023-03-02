import { useState } from 'react';
import { useRecoilState } from 'recoil'
import { pageState } from '../../util/state/atom'
import { Button, ErrMsg, Form, Input } from './style';

const AddPage = () => {
  const [pages, setPages] = useRecoilState(pageState)
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}} = e
    setValue(value)
  }

  const handlePages = (e: React.FormEvent) => {
    e.preventDefault()
    if(value === ''){
      setError('빈 페이지는 추가할 수 없습니다.')
      return
    }else if(pages.indexOf(value) !==-1){
      setError('중복된 페이지는 추가할 수 없습니다.')
      return
    }
    setPages((prev) => [...prev, value])
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