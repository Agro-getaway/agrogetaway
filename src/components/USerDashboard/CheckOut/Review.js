import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";

const farm = [
  {
    name: "Service 1",
    desc: "Food",
    price: "UGX10000",
  },
  {
    name: "Service 2",
    desc: "Farm Experience",
    price: "UGX15000",
  },
  {
    name: "Service 3",
    desc: "Other Services",
    price: "UGX10000",
  },
];

const addresses = ["Kampala", "Kireka", "Banda"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Balikowa Jane" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking summary
      </Typography>
      <List disablePadding>
        {farm.map((farm) => (
          <ListItem key={farm.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={farm.name} secondary={farm.desc} />
            <Typography variant="body2">{farm.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            UGX45000
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Details
          </Typography>
          <Typography gutterBottom>Balikowa Jane</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
