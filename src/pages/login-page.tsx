import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
  } from '@chakra-ui/react';
import { LoginFormInput } from '../app-types/login-form-input.type';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from '@chakra-ui/react'
  
  export default function LoginPage() {

    const toast = useToast();
    //schema validation
    const schema = yup.object().shape({
      email: yup.string().required('plase fill email').email('email type invalid'),
      password: yup.string().required('plase fill password').min(3,'more than 3 charecter'),
    })

    const { register, handleSubmit, formState: { errors ,isSubmitting} } = useForm<LoginFormInput>({
      resolver: yupResolver(schema),
      mode: 'all'
    });
    const onSubmit: SubmitHandler<LoginFormInput> = data => {
      // console.log(data);
      toast({
        title: 'Success!',
        description:JSON.stringify(data),
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email ? true:false}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")}/>
                <FormErrorMessage>
                  {errors.email && errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true:false}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")}/>
                <FormErrorMessage>
                  {errors.password && errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  type='submit'
                  isLoading = {isSubmitting}
                  loadingText= 'Processing...'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </form>
    );
  }