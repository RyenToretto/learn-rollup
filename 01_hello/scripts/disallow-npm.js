const agent = process.env.npm_config_user_agent;
const { error } = console;

if (!agent.startsWith('pnpm')) {
  error('\n统一使用 pnpm 管理依赖.\n  $ npm i pnpm -g\n');
  process.exit(1);
}
