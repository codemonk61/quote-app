
import { useState } from 'react'
import Input from './atoms/Input';
import Button from './atoms/Button';
import Text from './atoms/Text';

const Styleguides = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const handleTextChange = (e) => {
        setName(e.target.value);
    };

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile.name);
        }
    };
    return (
        <div>



            <h2>Input Component:</h2>
            <Input
                type="text"
                height="50px"
                onChange={handleTextChange}
                value={name}
                placeHolder="Enter your name"

            />
            <h2>File Input Component:</h2>
            <Input
                type="file"
                onChange={handleChange}
                height="30px"
            />
            <hr />
            <h2>Button Component</h2>

            <Button
                block={false}
                alignment="center"
                bgColor="red"
                innerText="Login"
                onClick={handleChange}
            />
            <h2>Paragraph Component</h2>
            <Text
                text="This is left-aligned text."
                marginTop="10px"
                marginBottom="10px"
                color="blue"
                fontSize="18px"
                fontWeight="bold"
                alignment="left"
            />
            <Text
                text="This is center-aligned text."
                marginTop="10px"
                color="green"
                fontSize="16px"
                fontWeight="normal"
                alignment="center"
            />
            <Text
                text="This is right-aligned text."
                marginTop="10px"
                color="red"
                fontSize="16px"
                fontWeight="normal"
                alignment="right"
            />
            <Text
                text="This is justified text."
                marginTop="10px"
                color="purple"
                fontSize="16px"
                fontWeight="normal"
                alignment="justify"
            />
            <Text
                text="This text will show ellipsis if it is too long to fit in the container."
                marginTop="10px"
                color="black"
                fontSize="16px"
                fontWeight="normal"
                ellipsis={true} // Enable ellipsis
            />
        </div>
    )
}

export default Styleguides