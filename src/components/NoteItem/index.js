import React from 'react';
import {
    Box,
    Title
} from "./styles";

export default function NoteItem({data, index, onPress}) {
 return (
   <Box onPress={()=>onPress(index)}>
       <Title>{data.title}</Title>
   </Box>
  );
}