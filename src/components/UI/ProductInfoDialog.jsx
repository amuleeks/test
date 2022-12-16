import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './ProductInfoDialog.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  paper: {

  },
}));

const ProductInfoDialog = ({ item, open, onClose }) => {
  const classes = useStyles();
  const ratingValue = parseFloat(item.avgRating);

  const handleSubmit = async (event) => {
    console.log("PRESSED");

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = { id: item.id, comment: data.get('comment') }

    console.log(payload);

    try {
      await axios.post('http://localhost:8080/item/addComment', payload)
        .then(response => {
          alert("Your review was added!");
          window.location.reload(false);


        })


    } catch (err) {
      alert("Something went wrong please try again..");
    }


  };


  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.paper}
    >
      <DialogContent>
        <h3>{item.productName}</h3>
        <h3>Price: ${item.price}</h3>
        <h3> Description:</h3>
        <p>{item.description}</p>
        <h4>Ratings</h4><Rating name="half-rating-read" defaultValue={ratingValue} precision={0.1} readOnly />
        <h4>Reviews</h4>

        <div>
          <List>
            {
              item.reviews.map((review, index) => (
                <ListItem key={index}>
                  <p>{review}</p>
                </ListItem>

              ))
            }
          </List>
        </div>

        <div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="comment"
              label="Enter your review here"
              name="comment"
              autoComplete="comment"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Review
            </Button>
          </Box>

        </div>

      </DialogContent>
    </Dialog>
  );

};

export default ProductInfoDialog;

