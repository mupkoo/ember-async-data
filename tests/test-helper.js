import Application from 'ember-async-data/app';
import config from 'ember-async-data/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
