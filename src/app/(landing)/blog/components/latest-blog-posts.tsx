import Link from 'next/link';
import { Container, Stack, Box, Typography, Button } from '@mui/material';
import { getPosts } from '@/services/server-functions/ghost-client';
import { brandColors } from '@/theme/config/brand';
import BlogCard from './blog-card';
import HeroPost from './hero-post';

export default async function LatestBlogPosts() {
  const posts = await getPosts(5);
  posts.shift();
  return (
    <Container
      component={Stack}
      sx={{
        display: 'flex',
        py: 6,
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: brandColors.primaryLighter,
      }}
    >
      <HeroPost />
      <Stack
        sx={{ mt: 5, mb: 5, width: '78.7%' }}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <Typography variant="h5" sx={{ color: '#000000' }}>
          Latest posts
        </Typography>
        <Button
          variant="outlined"
          sx={{ border: 1, borderColor: '#000000', color: '#000000' }}
          component={Link}
          href="/blog/all"
        >
          View All
        </Button>
      </Stack>
      <Box
        sx={{
          width: '78.7%',
          gap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.map((post, index) => (
          <BlogCard
            excerpt={post.excerpt as string}
            feature_image={post.feature_image as string}
            primary_tag={post.primary_tag?.name as string}
            title={post.title as string}
            key={index}
            slug={post.slug}
          />
        ))}
      </Box>
    </Container>
  );
}
