import { useState } from 'react';
import { Button } from 'components/Buttons/Buttons';
import TextField from '@mui/material/TextField';

const AddCategory = ({ categoryArray }) => {
  const [category, setCategory] = useState('');

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  const changeCategory = event => {
    event.preventDefault();

    if (category.trim() === '') {
      alert('Empty category');
      return;
    }
    categoryArray.push(category);
    setCategory('');
    console.log(category);
    console.log(categoryArray);
  };

  const clearField = () => setCategory('');

  return (
    <form onSubmit={changeCategory}>
      <TextField
        helperText="Добавьте категорию"
        id="category"
        label="Добавить категорию"
        onChange={handleChangeCategory}
        value={category}
        type="text"
        name="category"
        required
      />
      <Button name="Добавить" type="submit" />
      <Button name="Очистить" type="button" onClick={clearField} />
    </form>
  );
};

export default AddCategory;
