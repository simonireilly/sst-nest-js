# SST with NestJS

Composition of NestJS standalone with Vendia Serverless Express for demonstrating strong conventions applied to serverless applications.

- [SST with NestJS](#sst-with-nestjs)
  - [Justification](#justification)
  - [Resources](#resources)

## Justification

Often we want to use the cool new tools, but we also need to go fast, and onboard developers into our team.

By using a framework with strong conventions we can rely on its documentation, tutorials and community to enable our team to be on-boarded quickly.

Additionally we avoid some duplicated effort for undifferentiated heavy lifting such as:

- Implementing our own patterns for Model, View, Controller
- Implementing our own patterns for Data Access processes
- Implementing custom solutions for documentation
- Implementing our own build, compile, preview and ship processes

These wins go hand in hand with the idea that we can also have a portable application, and more specifically, a composable application.

One which we can compose into a local dev server, and also compose into a remote serverless deploy.

This is one of the main advantages that NestJS brings to the table.

## Resources

- NestJS Serverless: https://docs.nestjs.com/faq/serverless
- Vendia serverless express: https://github.com/vendia/serverless-express
- Serverless stack: https://github.com/serverless-stack/serverless-stack
