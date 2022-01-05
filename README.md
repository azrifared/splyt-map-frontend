This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How to run for development

First, run the development server:

1. Run `npm install` to fetch dependencies
2. Create `.env.local` file in project root directory with following environment variables:
  - `MAP_TOKEN` (Please ask Hui Theng for the access token)
3. Run `npm run dev` 
4. By default server will be running on `http://localhost:3000` .

### Environment variables
| Env Variable         | Required        | Default Value      |
| -------------------- | --------------- | ------------------ |
| MAP_TOKEN              _required       | -                  |

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

I'm using react-map-gl as a third party library to handle the geo locator.
You can find [here][Map geo locator] to know more about this library.

[Map geo locator]: https://visgl.github.io/react-map-gl/


