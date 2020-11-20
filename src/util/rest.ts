export interface RESTOptions {
  auth?: boolean;
  timeout?: number;
  responseType?: string;
  headers?: { [header: string]: string };
}

export class REST {
  static async get(url: string, options: RESTOptions = {}) {
    return await REST.method(url, "GET", undefined, options);
  }

  static async put(url: string, data: any, options: RESTOptions = {}) {
    return await REST.method(url, "PUT", data, options);
  }

  static async post(url: string, data: any, options: RESTOptions = {}) {
    return await REST.method(url, "POST", data, options);
  }

  static async delete(url: string, options: RESTOptions = {}) {
    return await REST.method(url, "DELETE", undefined, options);
  }

  static async method(
    url: string,
    method: string,
    data: any = null,
    options: RESTOptions = {}
  ) {
    if (!options) options = {};
    const auth = !!options.auth;
    const timeout =
      typeof options.timeout === "number" ? options.timeout : 5000;

    // setup timeout
    const abortController = new AbortController();
    const fetchTimeout = async (
      url: string,
      ms: number,
      { signal = null, ...options } = {}
    ) => {
      const controller = new AbortController();
      const promise = fetch(url, { signal: controller.signal, ...options });
      if (signal) signal.addEventListener("abort", () => controller.abort());
      const timeout = setTimeout(() => controller.abort(), ms);
      try {
        const res = await promise;
        return res;
      } catch (e) {
        if (e instanceof DOMException) {
          throw "Connection timed out";
        } else {
          throw e;
        }
      } finally {
        clearTimeout(timeout);
      }
    };

    try {
      const req: any = {
        method: method,
        mode: "no-cors", // FIXME properly set cors requirements
        cache: "no-cache",
        credentials: auth ? "include" : "omit",
        headers: {
          ...{
            "Content-Type": "application/json; charset=utf-8",
          },
          ...options.headers,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer", //no-referrer, origin, ...
      };
      if (data) req.body = JSON.stringify(data);
      if (typeof timeout === "number" && timeout > 0)
        req.signal = abortController.signal;

      const response = req.signal
        ? await fetchTimeout(url, timeout, req)
        : await fetch(url, req);
      const body: any = await response.json();
      if (response.ok) {
        return body;
      } else {
        // throw error
        body.status = response.status;
        body.statusText = response.statusText;

        throw body;
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static placeholder(success: boolean, data?: any | null, timeout = 3000) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (success) resolve(data);
        else reject(data);
      }, timeout);
    });
  }
}
