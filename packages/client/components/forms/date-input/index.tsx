import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
} from "@chakra-ui/react"
import { getDaysInMonth, isValid } from "date-fns"
import { useField } from "formik"
import React, { useEffect, useState } from "react"

import { IInputProps } from "../types"

export interface IDateInputProps extends IInputProps {
  minYear?: number
  maxYear?: number
}

let formatDateValue = value => {
  return !value ? null : value < 10 ? `0${value}` : value
}

export let FieldDateInput = ({
  name,
  label,
  minYear,
  maxYear,
  ...props
}: IDateInputProps) => {
  let [field, meta, helpers] = useField(name)
  let { value, error, touched } = meta
  let { setValue, setError } = helpers
  let [day, setDay] = useState(field?.value?.split('-')[2])
  let [month, setMonth] = useState(field?.value?.split('-')[1])
  let [year, setYear] = useState(field?.value?.split('-')[0])
  let daysInMonth = getDaysInMonth(new Date(value))
  useEffect(() => {
    let dateString = `${year}-${month}-${day}`
    let validDate = isValid(new Date(dateString))
    let isComplete = !!day && !!month && !!year
    if (!isComplete || !validDate) {
      setError('Please enter a valid date')
      setValue(null)
      return
    }
    validDate ? setValue(dateString) : setError('Please enter a valid date')
  }, [day, month, year])

  return (
    <FormControl isInvalid={touched && !!error} mb="5" {...props}>
      <FormLabel fontSize="lg" fontWeight="bold">
        {label}
      </FormLabel>
      <SimpleGrid columns={3} spacing={{ base: 2, md: 3 }}>
        <NumberInput
          min={1}
          max={daysInMonth}
          value={day}
          borderColor="grey.200"
          size="lg"
          onChange={value => {
            let formattedValue = formatDateValue(value)

            setDay(formattedValue)
          }}
        >
          <NumberInputField
            borderWidth="2px"
            focusBorderColor="accent2.400"
            placeholder="DD"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput
          min={1}
          max={12}
          value={month}
          borderColor="grey.200"
          size="lg"
          onChange={value => {
            let formattedValue = formatDateValue(value)

            setMonth(formattedValue)
          }}
        >
          <NumberInputField
            borderWidth="2px"
            focusBorderColor="accent2.400"
            placeholder="MM"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput
          value={year}
          min={minYear}
          max={maxYear}
          borderColor="grey.200"
          size="lg"
          onChange={value => {
            let formattedValue = formatDateValue(value)
            setYear(formattedValue)
          }}
        >
          <NumberInputField
            borderWidth="2px"
            focusBorderColor="accent2.400"
            placeholder="YYYY"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </SimpleGrid>
      <FormErrorMessage>{touched && error}</FormErrorMessage>
    </FormControl>
  )
}
