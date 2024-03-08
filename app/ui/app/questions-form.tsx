"use client"
import { Card, CardHeader, CardBody, FormControl, FormLabel, Tooltip, Button, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import {InfoOutlineIcon} from '@chakra-ui/icons'
import {data} from '@/app/lib/data';
import { useState } from 'react';



function QuestionsForm() {
    const [selected, setSelected] = useState<string>('')
    const [roleSelected, setRoleSelected] = useState<string>('')
    const options = [
        {label: 'Solutions Architect', value: 'sa'},
        // {label: 'Technical Account Manager', value: 'tam'}
      ];

    const levels = [
        {label: 'L4', value: 'l4'},
        {label: 'L5', value: 'l5'},
        {label: 'L6', value: 'l6'},
        {label: 'L7', value: 'l7'},
    ] 

    type ObjectKey = keyof typeof data;

    const myVar = selected as ObjectKey;



    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        setSelected(e.target.value);

    }
    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setRoleSelected(e.target.value);

    }
    
   
  return (
    <Card>
       <CardHeader>
        <h1>To generate your Learning Plan, answer the following questions</h1>
       </CardHeader> 
       <CardBody>
        <form>
            <div className="my-4">
                <FormControl >
                    <FormLabel>Select Your Role</FormLabel>
                    <Select placeholder='Select option' onChange={handleRoleChange}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}> {option.label}</option>
                        ))} 
                    </Select>
                
                </FormControl>
            </div>
            <div className='my-4' hidden={!roleSelected}>
                <FormControl>
                    <FormLabel>What's your Level?</FormLabel>
                    <Select name="level" placeholder='Select option' onChange={handleChange}>
                        {levels.map(option => (
                            <option key={option.value} value={option.value}> {option.label}</option>
                        ))} 
                    </Select>
                </FormControl>
            </div>
            <div hidden={!selected}>
            <h2>Rate yourself across the following Dimensions</h2>                
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Ambiguity <Tooltip label={data[myVar]?.ambiguity.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Scope and Influence <Tooltip label={data[myVar]?.scopeAndInfluence?.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Execution <Tooltip label={data[myVar]?.execution?.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Communication <Tooltip label={data[myVar]?.communication?.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Impact <Tooltip label={data[myVar]?.impact?.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Technical <Tooltip label={data[myVar]?.technical?.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            <div className='my-4'>
                <FormControl>
                    <FormLabel>Process Improvement <Tooltip label={data[myVar]?.processImprovement?.description} placement="right">
                        <InfoOutlineIcon/>
                        </Tooltip></FormLabel>
                    <RadioGroup >
                        <Stack direction='row'>
                            <Radio value='1'>1</Radio>
                            <Radio value='2'>2</Radio>
                            <Radio value='3'>3</Radio>
                            <Radio value='4'>4</Radio>
                            <Radio value='5'>5</Radio>
                        </Stack>
                        </RadioGroup>
                </FormControl>
            </div>
            </div>

            <Button colorScheme='blue' hidden={!selected}>Submit</Button>
            
        </form>

        </CardBody>
    </Card>
  )

}

export default QuestionsForm;
