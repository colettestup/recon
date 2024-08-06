params.count = params.count || scope.signalRef(`max(2,2*floor((${deref(_.gradientLength())})/100))`);
