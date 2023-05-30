import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useState } from "react";
import styled from 'styled-components';


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="New Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% -25px)", md: 20 }, }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
          
                <Box width={400} height={330} bgcolor={'background.default'} color={"text.primary"} p={3} borderRadius={5} >
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="center">
                        Create Post
                    </Typography>

                    <UserBox>
                        <Avatar sx={{ bgcolor: "red", width: 30, height: 30, }} aria-label="recipe">
                            R
                        </Avatar>
                        <Typography variant="span" fontWeight={500}>
                            User
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        // label="Multiline"
                        multiline
                        rows={4}
                        placeholder="What's in your mind......"
                        variant="standard"
                    />
                    <Stack direction="row" spacing={2} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRange/></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add
