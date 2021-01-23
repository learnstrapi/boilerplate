import { Stack, Tag } from "@chakra-ui/react"
import React from "react"
import uuid from "uuid"

export let BlogTags = ({ tags }) => {
  return (
    <>
      {tags && (
        <Stack spacing={4} isInline>
          {tags.map(tag => {
            let { name } = tag
            return (
              <Tag key={uuid()} variantColor="accent2">
                {name}
              </Tag>
            )
          })}
        </Stack>
      )}
    </>
  )
}
