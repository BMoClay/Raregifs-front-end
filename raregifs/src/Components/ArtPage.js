import React from 'react'
import ArtCard from './ArtCard'
import { Container, Segment, Card } from 'semantic-ui-react'

function ArtPage(
    { 
        currentUser, 
        artworks, 
        onAcquireArtwork, 
    }
) {
    
  const uArtwork =
    artworks.map((artwork) => {
        // return <ArtCard
        return <Card 
                    style={{ 
                        margin: 10,
                        padding: 40,
                        width: 300,
                    }}
                justify-content="center"
                // margin="0 auto"
                // width='300px'
                >
                    <ArtCard
                    // className='art-card'
                    justify-content="center"
                    key={artwork.id} 
                    artwork={artwork} 
                    currentUser={currentUser} 
                    onAcquireArtwork={onAcquireArtwork}
                    />
                </Card>

    })
    
    return(
        <div className='art-container' >
            {uArtwork}
        </div>
        // <div className='art-container' >
            // <Container 
            //     // display="flex"
            //     // align-items="center"
            //     style={{ 
            //         margin: 10,
            //         padding: 40,
            //         width: 300,
            //     }}
            //     >
            //         {uArtwork}
            // </Container>
        // </div>
    )
}

export default ArtPage;

// className='art-card'
//             key={artwork.id} 
//             artwork={artwork} 
//             currentUser={currentUser} 
//             onAcquireArtwork={onAcquireArtwork}



//{/* <Grid stackable centered columns={1}>

//</Grid> */}


        // <Dropdown.Menu>
        // <Dropdown.Item text="Gallery" icon="trophy" as={Link} to='/'/>
        // <Dropdown.Item text="Collections" icon="cogs" as={Link} to='/users'/>
        // {currentUser ? (
        //     <>
        //         <Dropdown.Item text="Storage" icon="shopping basket" as={Link} to='/storage'/>
        //         <Dropdown.Item text="Upload" icon="upload" as={Link} to='/upload'/> 
        //         <Dropdown.Item text="Account" icon="secret user" as={Link} to="/account"/>
        //         <Button size="mini" onClick={logout} >logout</Button>  
        //     </>
        // ) : (
        //     <>
        //         <Dropdown.Item text="Login" icon="sign-in" as={Link} to='/login'/>
        //         <Dropdown.Item text="Signup" icon="signup" as={Link} to='/signup'/>
        //     </>
        // )}
        // </Dropdown.Menu>




    //     <Dropdown.Menu> 
    //     <Dropdown.Item options={userOptions} 
    //         pointing='top left' 
    //         text="Raregifs" 
    //         onClick={handleMenuClick}>
    //     </Dropdown.Item>
    // </Dropdown.Menu>
    // );