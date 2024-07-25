/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AnyApiRef } from '@backstage/core-plugin-api';

/**
 * Method for creating secret collectors that can be used in the scaffolder form to collect secrets from the end user.
 * @public
 */
export function createScaffolderFormHook<
  Deps extends { [key in string]: AnyApiRef },
>(options: {
  deps: Deps;
  fn: (ctx: {}, deps: { [key in keyof Deps]: Deps[key]['T'] }) => Promise<void>;
}): any {}

const githubAuth = createScaffolderFormHook({
  deps: { configApi: configApiRef },
  fn: async (asd, { configApi }) => {},
});
