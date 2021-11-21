import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": "src/standalone.handler",
      },
      defaultFunctionProps: {
        bundle: {
          externalModules: [
            "@nestjs/microservices",
            "@nestjs/websockets",
            "nats",
            "cache-manager",
            "class-transformer",
            "class-validator",
          ],
        },
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
