import testConfig from './test.config';
import productionConfig from './production.config';
import localConfig from './local.config'

const configs = {
    local: localConfig,
    test: testConfig,
    production: productionConfig,
};
const env = process.env.NODE_ENV || 'local';

export default () => configs[env];