import { AbstractConnector } from '@web3-react/abstract-connector';
import Web3ProviderEngine from 'web3-provider-engine';
import CacheSubprovider from 'web3-provider-engine/subproviders/cache.js';
import { RPCSubprovider } from '@0x/subproviders/lib/src/subproviders/rpc_subprovider';
import { BaseWalletSubprovider } from '@0x/subproviders/lib/src/subproviders/base_wallet_subprovider';
import { Transaction } from 'ethereumjs-tx';
import { WalletSubproviderErrors } from '@0x/subproviders/lib/src/types';
import { stripHexPrefix } from 'ethereumjs-util';
import AppEth from '@ledgerhq/hw-app-eth';
import TransportHID from '@ledgerhq/hw-transport-webhid';
import TransportU2F from '@ledgerhq/hw-transport-u2f';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime =  module.exports ;

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var getTransport = function getTransport() {
  // web hid supported
  if ("hid" in navigator) {
    return TransportHID.create();
  } // try U2F


  return TransportU2F.create();
};
/**
 * Subprovider for interfacing with a user's [Ledger Nano S](https://www.ledgerwallet.com/products/ledger-nano-s).
 * This subprovider intercepts all account related RPC requests (e.g message/transaction signing, etc...) and
 * re-routes them to a Ledger device plugged into the users computer.
 */


var LedgerSubprovider = /*#__PURE__*/function (_BaseWalletSubprovide) {
  _inheritsLoose(LedgerSubprovider, _BaseWalletSubprovide);

  /**
   * Instantiates a LedgerSubprovider. Defaults to derivationPath set to `44'/60'/x'`.
   * TestRPC/Ganache defaults to `m/44'/60'/x'/0`, so set this in the configs if desired.
   * @param config Several available configurations
   * @return LedgerSubprovider instance
   */
  function LedgerSubprovider(_ref) {
    var _this;

    var networkId = _ref.networkId,
        baseDerivationPath = _ref.baseDerivationPath;
    _this = _BaseWalletSubprovide.call(this) || this;
    _this.selectedAccountIndex = 0;
    _this._networkId = networkId;
    _this._baseDerivationPath = baseDerivationPath || "m/44'/60'/x'/0";
    return _this;
  }
  /**
   * Retrieve the set derivation path
   * @returns derivation path
   */


  var _proto = LedgerSubprovider.prototype;

  _proto.getPath = function getPath() {
    return this._baseDerivationPath;
  }
  /**
   * Set a desired derivation path when computing the available user addresses
   * @param basDerivationPath The desired derivation path (e.g `44'/60'/0'`)
   */
  ;

  _proto.setPath = function setPath(basDerivationPath) {
    this._baseDerivationPath = basDerivationPath;
  }
  /**
   * Retrieve a users Ledger accounts. The accounts are derived from the derivationPath,
   * master public key and chain code. Because of this, you can request as many accounts
   * as you wish and it only requires a single request to the Ledger device. This method
   * is automatically called when issuing a `eth_accounts` JSON RPC request via your providerEngine
   * instance.
   * @param numberOfAccounts Number of accounts to retrieve (default: 10)
   * @param from
   * @return An array of accounts
   */
  ;

  _proto.getAccountsAsync =
  /*#__PURE__*/
  function () {
    var _getAccountsAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee(numberOfAccounts, from) {
      var addresses, transport, eth, i, path, info;
      return runtimeModule.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (numberOfAccounts === void 0) {
                numberOfAccounts = 10;
              }

              if (from === void 0) {
                from = 0;
              }

              addresses = [];
              _context.next = 5;
              return getTransport();

            case 5:
              transport = _context.sent;
              _context.prev = 6;
              eth = new AppEth(transport);
              i = from;

            case 9:
              if (!(i < from + numberOfAccounts)) {
                _context.next = 18;
                break;
              }

              path = this._baseDerivationPath.replace("x", String(i));
              _context.next = 13;
              return eth.getAddress(path, false, true);

            case 13:
              info = _context.sent;
              addresses.push(info.address);

            case 15:
              i++;
              _context.next = 9;
              break;

            case 18:
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](6);
              throw _context.t0;

            case 23:
              _context.prev = 23;
              _context.next = 26;
              return transport.close();

            case 26:
              return _context.finish(23);

            case 27:
              return _context.abrupt("return", addresses);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 20, 23, 27]]);
    }));

    function getAccountsAsync(_x, _x2) {
      return _getAccountsAsync.apply(this, arguments);
    }

    return getAccountsAsync;
  }()
  /**
   * Signs a transaction on the Ledger with the account specificed by the `from` field in txParams.
   * If you've added the LedgerSubprovider to your app's provider, you can simply send an `eth_sendTransaction`
   * JSON RPC request, and this method will be called auto-magically. If you are not using this via a ProviderEngine
   * instance, you can call it directly.
   * @param txParams Parameters of the transaction to sign
   * @return Signed transaction hex string
   */
  ;

  _proto.signTransactionAsync =
  /*#__PURE__*/
  function () {
    var _signTransactionAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee2(txParams) {
      var path, transport, eth, tx, result, signedChainId, validChainId;
      return runtimeModule.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              path = this._baseDerivationPath.replace("x", this.selectedAccountIndex.toString());

              if (path) {
                _context2.next = 3;
                break;
              }

              throw new Error("address unknown '" + txParams.from + "'");

            case 3:
              _context2.next = 5;
              return getTransport();

            case 5:
              transport = _context2.sent;
              _context2.prev = 6;
              eth = new AppEth(transport);
              tx = new Transaction(txParams, {
                chain: this._networkId
              }); // Set the EIP155 bits

              tx.raw[6] = Buffer.from([this._networkId]); // v

              tx.raw[7] = Buffer.from([]); // r

              tx.raw[8] = Buffer.from([]); // s
              // Pass hex-rlp to ledger for signing

              _context2.next = 14;
              return eth.signTransaction(path, tx.serialize().toString("hex"));

            case 14:
              result = _context2.sent;
              // Store signature in transaction
              tx.v = Buffer.from(result.v, "hex");
              tx.r = Buffer.from(result.r, "hex");
              tx.s = Buffer.from(result.s, "hex"); // EIP155: v should be chain_id * 2 + {35, 36}

              signedChainId = Math.floor((tx.v[0] - 35) / 2);
              validChainId = this._networkId & 0xff; // FIXME this is to fixed a current workaround that app don't support > 0xff

              if (!(signedChainId !== validChainId)) {
                _context2.next = 22;
                break;
              }

              throw LedgerSubprovider.makeError("Invalid networkId signature returned. Expected: " + this._networkId + ", Got: " + signedChainId, "InvalidNetworkId");

            case 22:
              return _context2.abrupt("return", "0x" + tx.serialize().toString("hex"));

            case 23:
              _context2.prev = 23;
              _context2.next = 26;
              return transport.close();

            case 26:
              return _context2.finish(23);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[6,, 23, 27]]);
    }));

    function signTransactionAsync(_x3) {
      return _signTransactionAsync.apply(this, arguments);
    }

    return signTransactionAsync;
  }();

  LedgerSubprovider.makeError = function makeError(msg, id) {
    var err = new Error(msg); // @ts-ignore

    err.id = id;
    return err;
  }
  /**
   * Sign a personal Ethereum signed message. The signing account will be the account
   * associated with the provided address.
   * The Ledger adds the Ethereum signed message prefix on-device.  If you've added
   * the LedgerSubprovider to your app's provider, you can simply send an `eth_sign`
   * or `personal_sign` JSON RPC request, and this method will be called auto-magically.
   * If you are not using this via a ProviderEngine instance, you can call it directly.
   * @param data Hex string message to sign
   * @param address Address of the account to sign with
   * @return Signature hex string (order: rsv)
   */
  ;

  _proto.signPersonalMessageAsync =
  /*#__PURE__*/
  function () {
    var _signPersonalMessageAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee3(data, address) {
      var path, transport, eth, result, v, vHex;
      return runtimeModule.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              path = this._baseDerivationPath.replace("x", this.selectedAccountIndex.toString());

              if (path) {
                _context3.next = 3;
                break;
              }

              throw new Error("address unknown '" + address + "'");

            case 3:
              _context3.next = 5;
              return getTransport();

            case 5:
              transport = _context3.sent;
              _context3.prev = 6;
              eth = new AppEth(transport);
              _context3.next = 10;
              return eth.signPersonalMessage(path, stripHexPrefix(data));

            case 10:
              result = _context3.sent;
              v = parseInt(result.v.toString(), 10) - 27;
              vHex = v.toString(16);

              if (vHex.length < 2) {
                vHex = "0" + v;
              }

              return _context3.abrupt("return", "0x" + result.r + result.s + vHex);

            case 15:
              _context3.prev = 15;
              _context3.next = 18;
              return transport.close();

            case 18:
              return _context3.finish(15);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[6,, 15, 19]]);
    }));

    function signPersonalMessageAsync(_x4, _x5) {
      return _signPersonalMessageAsync.apply(this, arguments);
    }

    return signPersonalMessageAsync;
  }()
  /**
   * eth_signTypedData is currently not supported on Ledger devices.
   * @return Signature hex string (order: rsv)
   */
  ;

  _proto.signTypedDataAsync =
  /*#__PURE__*/
  function () {
    var _signTypedDataAsync = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee4() {
      return runtimeModule.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              throw new Error(WalletSubproviderErrors.MethodNotSupported);

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function signTypedDataAsync() {
      return _signTypedDataAsync.apply(this, arguments);
    }

    return signTypedDataAsync;
  }();

  return LedgerSubprovider;
}(BaseWalletSubprovider);

var LedgerConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inheritsLoose(LedgerConnector, _AbstractConnector);

  function LedgerConnector(_ref) {
    var _this;

    var chainId = _ref.chainId,
        url = _ref.url,
        pollingInterval = _ref.pollingInterval,
        requestTimeoutMs = _ref.requestTimeoutMs,
        baseDerivationPath = _ref.baseDerivationPath;
    _this = _AbstractConnector.call(this, {
      supportedChainIds: [chainId]
    }) || this;
    _this.chainId = chainId;
    _this.url = url;
    _this.pollingInterval = pollingInterval;
    _this.requestTimeoutMs = requestTimeoutMs;
    _this.baseDerivationPath = baseDerivationPath;
    return _this;
  }

  var _proto = LedgerConnector.prototype;

  _proto.activate = /*#__PURE__*/function () {
    var _activate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee(baseDerivationPath) {
      var engine;
      return runtimeModule.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (baseDerivationPath) {
                this.baseDerivationPath = baseDerivationPath;
              }

              if (!this.provider) {
                engine = new Web3ProviderEngine({
                  pollingInterval: this.pollingInterval
                });
                engine.addProvider(new LedgerSubprovider({
                  networkId: this.chainId,
                  baseDerivationPath: this.baseDerivationPath
                }));
                engine.addProvider(new CacheSubprovider());
                engine.addProvider(new RPCSubprovider(this.url, this.requestTimeoutMs));
                this.provider = engine;
              }

              this.provider.start();
              return _context.abrupt("return", {
                provider: this.provider,
                chainId: this.chainId
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function activate(_x) {
      return _activate.apply(this, arguments);
    }

    return activate;
  }();

  _proto.getProvider = /*#__PURE__*/function () {
    var _getProvider = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee2() {
      return runtimeModule.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.provider);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getProvider() {
      return _getProvider.apply(this, arguments);
    }

    return getProvider;
  }();

  _proto.getChainId = /*#__PURE__*/function () {
    var _getChainId = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee3() {
      return runtimeModule.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.chainId);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getChainId() {
      return _getChainId.apply(this, arguments);
    }

    return getChainId;
  }();

  _proto.getAccount = /*#__PURE__*/function () {
    var _getAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee4() {
      return runtimeModule.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.provider._providers[0].getAccountsAsync(1, this.getAccountIndex());

            case 2:
              return _context4.abrupt("return", _context4.sent[0]);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getAccount() {
      return _getAccount.apply(this, arguments);
    }

    return getAccount;
  }();

  _proto.getAccounts = /*#__PURE__*/function () {
    var _getAccounts = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee5(page) {
      var perPage;
      return runtimeModule.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (page === void 0) {
                page = 1;
              }

              perPage = 5;
              _context5.next = 4;
              return this.provider._providers[0].getAccountsAsync(perPage, (page - 1) * perPage);

            case 4:
              return _context5.abrupt("return", _context5.sent);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getAccounts(_x2) {
      return _getAccounts.apply(this, arguments);
    }

    return getAccounts;
  }();

  _proto.getAccountIndex = function getAccountIndex() {
    var provider = this.provider._providers[0];
    return provider.selectedAccountIndex;
  };

  _proto.setAccountIndex = /*#__PURE__*/function () {
    var _setAccountIndex = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtimeModule.mark(function _callee6(index) {
      var address;
      return runtimeModule.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.provider._providers[0].selectedAccountIndex = index;
              _context6.next = 3;
              return this.provider._providers[0].getAccountsAsync(1, index);

            case 3:
              address = _context6.sent[0];
              this.emitUpdate({
                account: address
              });
              return _context6.abrupt("return", address);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function setAccountIndex(_x3) {
      return _setAccountIndex.apply(this, arguments);
    }

    return setAccountIndex;
  }();

  _proto.deactivate = function deactivate() {
    this.provider.stop();
  };

  return LedgerConnector;
}(AbstractConnector);

export { LedgerConnector };
//# sourceMappingURL=ledger-connector.esm.js.map
